package com.nf.mallproject.controller.be;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import com.nf.mallproject.entity.Merchandise;
import com.nf.mallproject.entity.Repertory;
import com.nf.mallproject.entity.SmallCategory;
import com.nf.mallproject.service.MerchandiseService;
import com.nf.mallproject.service.RepertoryService;
import com.nf.mallproject.service.SmallCategoryService;
import com.nf.mallproject.utils.MerchandiseAndPageVo;
import com.nf.mallproject.utils.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.constraints.Size;
import javax.xml.ws.Response;
import java.util.List;

@Controller
@RequestMapping("/be")
public class MerchandiseController {

    @Autowired
    private SmallCategoryService smallCategoryService;

    @Autowired
    private MerchandiseService merchandiseService;

    @Autowired
    private RepertoryService repertoryService;

    @PostMapping("/merchandise/list")
    @ResponseBody
    public ResponseVO list(@RequestParam(value = "pageNum",required = false,defaultValue = "1") Integer pageNum, String s_name){
        Page<Repertory> repertories = (Page<Repertory>) repertoryService.getPage(pageNum, 5);
        PageInfo<Repertory> pageInfo = new PageInfo<>(repertories);
        List<Merchandise> merchandises = merchandiseService.getAll(s_name);
        List<SmallCategory> smallCategories = smallCategoryService.getAll();
        return new ResponseVO("200", "ok", new MerchandiseAndPageVo(smallCategories, merchandises, pageInfo));
    }
}

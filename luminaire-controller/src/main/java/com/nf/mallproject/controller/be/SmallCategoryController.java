package com.nf.mallproject.controller.be;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import com.nf.mallproject.entity.BigCategory;
import com.nf.mallproject.entity.SmallCategory;
import com.nf.mallproject.service.BigCategoryService;
import com.nf.mallproject.service.SmallCategoryService;
import com.nf.mallproject.utils.BigCAndPageVO;
import com.nf.mallproject.utils.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/be")
public class SmallCategoryController {

    @Autowired
    private BigCategoryService bigCategoryService;

    @Autowired
    private SmallCategoryService smallCategoryService;

    @PostMapping("/smallCategory/list")
    @ResponseBody
    public ResponseVO list(@RequestParam(value = "pageNum" ,required = false,defaultValue = "1")Integer pageNum,String s_cname) {
        Page<SmallCategory> smallCategories = (Page<SmallCategory>) smallCategoryService.getPage(pageNum, 5, s_cname);
        PageInfo<SmallCategory> pageInfo = new PageInfo<>(smallCategories);
        List<BigCategory> bigCategories = bigCategoryService.getAll();
        return new ResponseVO("200", "ok", new BigCAndPageVO(bigCategories, pageInfo));
    }

    @PostMapping("/smallCategory/update")
    @ResponseBody
    public ResponseVO update(@Valid SmallCategory smallCategory, BindingResult bindingResult){
        String result = "success";
        if (bindingResult.hasErrors()) {
            result = bindingResult.getFieldErrors().get(0).getDefaultMessage();
        } else {
            smallCategoryService.update(smallCategory);
        }
        return new ResponseVO("200","ok",result);
    }

    @PostMapping("/smallCategory/insert")
    @ResponseBody
    public ResponseVO insert(@Valid SmallCategory smallCategory, BindingResult bindingResult){
        String result = "success";
        if (bindingResult.hasErrors()) {
            result = bindingResult.getFieldErrors().get(0).getDefaultMessage();
        } else {
            smallCategoryService.insert(smallCategory);
        }
        return new ResponseVO("200","ok",result);
    }

    @PostMapping("/smallCategory/delete")
    @ResponseBody
    public ResponseVO update(Integer[] s_cid){
        smallCategoryService.delete(Arrays.asList(s_cid));
        return new ResponseVO("200","ok","success");
    }
}

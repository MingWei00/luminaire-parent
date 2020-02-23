package com.nf.mallproject.controller.be;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import com.nf.mallproject.entity.BigCategory;
import com.nf.mallproject.service.BigCategoryService;
import com.nf.mallproject.utils.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

/**
 * @author hanweng
 */
@Controller
@RequestMapping("/be")
public class BigCategoryController {

    @Autowired
    private BigCategoryService bigCategoryService;

    @RequestMapping("/index")
    public String index() {
        return "be/index";
    }

    @PostMapping("/bigCategory/list")
    @ResponseBody
    public ResponseVO list(@RequestParam(value = "pageNum",required = false,defaultValue = "1") Integer pageNum, String b_cname){
        Page<BigCategory> bigCategories = (Page<BigCategory>) bigCategoryService.getPage(pageNum, 5, b_cname);
        PageInfo<BigCategory> pageInfo = new PageInfo<>(bigCategories);
        return new ResponseVO("200","ok",pageInfo);
    }

    @PostMapping("/bigCategory/insert")
    @ResponseBody
    public ResponseVO insert(@Valid BigCategory bigCategory, BindingResult bindingResult){
        String result = "success";
        if (bindingResult.hasErrors()) {
            result = bindingResult.getFieldErrors().get(0).getDefaultMessage();
        } else {
            bigCategoryService.insert(bigCategory);
        }
        return new ResponseVO("200","ok",result);
    }

    @PostMapping("/bigCategory/update")
    @ResponseBody
    public ResponseVO update(@Valid BigCategory bigCategory, BindingResult bindingResult){
        String result = "success";
        if (bindingResult.hasErrors()) {
            result = bindingResult.getFieldErrors().get(0).getDefaultMessage();
        } else {
            bigCategoryService.update(bigCategory);
        }
        return new ResponseVO("200","ok",result);
    }

    @PostMapping("/bigCategory/delete")
    @ResponseBody
    public ResponseVO update(Integer[] b_cid){
        bigCategoryService.delete(Arrays.asList(b_cid));
        return new ResponseVO("200","ok","success");
    }

}

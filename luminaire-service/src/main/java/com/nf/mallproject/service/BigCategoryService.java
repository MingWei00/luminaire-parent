package com.nf.mallproject.service;

import com.nf.mallproject.entity.BigCategory;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BigCategoryService {
    List<BigCategory> getAll();

    List<BigCategory> getPage(Integer pageNum ,Integer pageSize,String b_cname);

    void insert(BigCategory bigCategory);

    void update(BigCategory bigCategory);

    void delete(List<Integer> b_cid);
}

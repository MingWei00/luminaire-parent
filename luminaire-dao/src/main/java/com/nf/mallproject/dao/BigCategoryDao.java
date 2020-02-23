package com.nf.mallproject.dao;

import com.nf.mallproject.entity.BigCategory;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BigCategoryDao {
    List<BigCategory> getAll();

    List<BigCategory> getPage(@Param("pageNum")Integer pageNum , @Param("pageSize")Integer pageSize,String b_cname);

    void insert(BigCategory bigCategory);

    void update(BigCategory bigCategory);

    void delete(List<Integer> b_cid);
}

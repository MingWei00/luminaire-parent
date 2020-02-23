package com.nf.mallproject.dao;

import com.nf.mallproject.entity.BigCategory;
import com.nf.mallproject.entity.SmallCategory;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SmallCategoryDao {
    List<SmallCategory> getAll();

    List<SmallCategory> getPage(@Param("pageNum")Integer pageNum , @Param("pageSize")Integer pageSize, String s_cname);

    void insert(SmallCategory smallCategory);

    void update(SmallCategory smallCategory);

    void delete(List<Integer> s_cid);

    void deleteByBCid(List<Integer> b_cid);
}

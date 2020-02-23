package com.nf.mallproject.utils;

import com.github.pagehelper.PageInfo;
import com.nf.mallproject.entity.BigCategory;
import com.nf.mallproject.entity.SmallCategory;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class BigCAndPageVO {
    public List<BigCategory> bigCategories;
    public PageInfo<SmallCategory> pageInfo;
}

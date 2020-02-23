package com.nf.mallproject.utils;

import com.github.pagehelper.PageInfo;
import com.nf.mallproject.entity.Merchandise;
import com.nf.mallproject.entity.Repertory;
import com.nf.mallproject.entity.SmallCategory;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class MerchandiseAndPageVo {

    public List<SmallCategory> smallCategories;
    public List<Merchandise> merchandises;
    public PageInfo<Repertory> pageInfo;
}

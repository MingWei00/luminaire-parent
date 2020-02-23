package com.nf.mallproject.service.impl;

import com.nf.mallproject.dao.MerchandiseDao;
import com.nf.mallproject.dao.SmallCategoryDao;
import com.nf.mallproject.entity.SmallCategory;
import com.nf.mallproject.service.SmallCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SmallCategoryServiceImpl implements SmallCategoryService {

    @Autowired(required = false)
    private SmallCategoryDao smallCategoryDao;

    @Autowired(required = false)
    private MerchandiseDao merchandiseDao;

    @Override
    public List<SmallCategory> getAll() {
        return smallCategoryDao.getAll();
    }

    @Override
    public List<SmallCategory> getPage(Integer pageNum, Integer pageSize, String s_cname) {
        return smallCategoryDao.getPage(pageNum,pageSize,s_cname);
    }

    @Override
    public void insert(SmallCategory smallCategory) {
        smallCategoryDao.insert(smallCategory);
    }

    @Override
    public void update(SmallCategory smallCategory) {
        smallCategoryDao.update(smallCategory);
    }

    @Override
    @Transactional
    public void delete(List<Integer> s_cid) {
        merchandiseDao.deleteBySCid(s_cid);
        smallCategoryDao.delete(s_cid);
    }
}

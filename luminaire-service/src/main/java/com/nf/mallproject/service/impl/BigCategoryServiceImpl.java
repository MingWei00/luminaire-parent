package com.nf.mallproject.service.impl;

import com.nf.mallproject.dao.BigCategoryDao;
import com.nf.mallproject.dao.SmallCategoryDao;
import com.nf.mallproject.entity.BigCategory;
import com.nf.mallproject.service.BigCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BigCategoryServiceImpl implements BigCategoryService {

    @Autowired(required = false)
    private BigCategoryDao bigCategoryDao;

    @Autowired(required = false)
    private SmallCategoryDao smallCategoryDao;

    @Override
    public List<BigCategory> getAll(){
        return bigCategoryDao.getAll();
    }

    @Override
    public List<BigCategory> getPage(Integer pageNum, Integer pageSize,String b_cname) {
        return bigCategoryDao.getPage(pageNum,pageSize,b_cname);
    }

    @Override
    public void insert(BigCategory bigCategory) {
        bigCategoryDao.insert(bigCategory);
    }

    @Override
    public void update(BigCategory bigCategory) {
        bigCategoryDao.update(bigCategory);
    }

    @Override
    @Transactional
    public void delete(List<Integer> b_cid) {
        smallCategoryDao.deleteByBCid(b_cid);
        bigCategoryDao.delete(b_cid);
    }
}

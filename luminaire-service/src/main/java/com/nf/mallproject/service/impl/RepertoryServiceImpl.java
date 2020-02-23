package com.nf.mallproject.service.impl;

import com.nf.mallproject.dao.RepertoryDao;
import com.nf.mallproject.entity.Repertory;
import com.nf.mallproject.service.RepertoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepertoryServiceImpl implements RepertoryService {

    @Autowired(required = false)
    private RepertoryDao repertoryDao;

    @Override
    public List<Repertory> getPage(Integer pageNum, Integer pageSize){
        return repertoryDao.getPage();
    }
}

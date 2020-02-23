package com.nf.mallproject.service;

import com.nf.mallproject.entity.Repertory;

import java.util.List;

public interface RepertoryService {
    List<Repertory> getPage(Integer pageNum,Integer pageSize);
}

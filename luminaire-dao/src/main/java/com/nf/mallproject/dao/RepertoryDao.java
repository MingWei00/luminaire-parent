package com.nf.mallproject.dao;

import com.nf.mallproject.entity.Repertory;

import java.util.List;

public interface RepertoryDao {
    List<Repertory> getPage();

    void insert(Repertory repertory);

    void update(Repertory repertory);

    void delete(List<Integer> m_id);
}

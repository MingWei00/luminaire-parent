package com.nf.mallproject.service;

import com.nf.mallproject.entity.Merchandise;
import com.nf.mallproject.entity.Repertory;

import java.util.List;

public interface MerchandiseService {
    List<Merchandise> getAll(String s_name);

    void insert(Merchandise merchandise, Repertory repertory);

    void update(Merchandise merchandise, Repertory repertory);

    void delete(List<Integer> m_id,List<Integer> r_id);

}

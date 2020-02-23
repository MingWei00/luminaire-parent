package com.nf.mallproject.dao;

import com.nf.mallproject.entity.Merchandise;

import java.util.List;

public interface MerchandiseDao {
    List<Merchandise> getAll(String s_name);

    Integer insert(Merchandise merchandise);

    void update(Merchandise merchandise);

    void delete(List<Integer> m_id);

    void deleteBySCid(List<Integer> s_cid);
}

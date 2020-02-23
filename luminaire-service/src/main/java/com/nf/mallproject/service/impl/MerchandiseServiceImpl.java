package com.nf.mallproject.service.impl;

import com.nf.mallproject.dao.MerchandiseDao;
import com.nf.mallproject.dao.RepertoryDao;
import com.nf.mallproject.entity.Merchandise;
import com.nf.mallproject.entity.Repertory;
import com.nf.mallproject.service.MerchandiseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MerchandiseServiceImpl implements MerchandiseService {

    @Autowired(required = false)
    private MerchandiseDao merchandiseDao;

    @Autowired(required = false)
    private RepertoryDao repertoryDao;

    @Override
    public List<Merchandise> getAll(String s_name) {
        return merchandiseDao.getAll(s_name);
    }

    @Override
    @Transactional
    public void insert(Merchandise merchandise, Repertory repertory) {
        List<Merchandise> merchandises = merchandiseDao.getAll(merchandise.getMName());
        if (merchandises.size() > 0 && merchandises.get(0).getMName() == merchandise.getMName()) {
            repertory.setMId(merchandises.get(0).getMId());
            repertoryDao.insert(repertory);
        }else {
            Integer m_id = merchandiseDao.insert(merchandise);
            repertory.setMId(m_id);
            repertoryDao.insert(repertory);
        }
    }

    @Override
    @Transactional
    public void update(Merchandise merchandise,Repertory repertory) {
        merchandiseDao.update(merchandise);
        repertoryDao.update(repertory);
    }

    @Override
    public void delete(List<Integer> m_id,List<Integer> r_id) {

    }

}

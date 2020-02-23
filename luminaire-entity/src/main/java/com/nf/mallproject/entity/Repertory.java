package com.nf.mallproject.entity;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class Repertory {
    public Integer mId;
    public String mSpecification;
    public BigDecimal mPrice;
    public BigDecimal mCostPrice;
    public Integer mRepertory;
}

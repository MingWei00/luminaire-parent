package com.nf.mallproject.entity;

import lombok.Data;

import java.sql.Date;

@Data
public class Merchandise {
    public Integer mId;
    public String mName;
    public String mImage;

    public Date mDate;
    public String mManufacturers;
    public Integer sCid;
}

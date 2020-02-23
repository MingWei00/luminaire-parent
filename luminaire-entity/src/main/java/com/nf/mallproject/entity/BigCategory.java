package com.nf.mallproject.entity;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
public class BigCategory {
    public String bCid;

    @NotEmpty(message = "输入值不能为空！")
    @Size(min = 1, max = 10, message = "输入值长度在1~10之间！")
    public String bCname;

    public List<Integer> list;
}

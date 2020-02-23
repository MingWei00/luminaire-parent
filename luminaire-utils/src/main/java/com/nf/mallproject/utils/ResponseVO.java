package com.nf.mallproject.utils;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ResponseVO {
    private String code;
    private String msg;
    private Object data;
}

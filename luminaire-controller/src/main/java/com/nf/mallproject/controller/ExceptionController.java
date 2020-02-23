package com.nf.mallproject.controller;

import com.nf.mallproject.utils.ResponseVO;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class ExceptionController {

    @ExceptionHandler(RuntimeException.class)
    @ResponseBody
    public ResponseVO handlerRuntime() {
        return new ResponseVO("500","filed","error");
    }
}

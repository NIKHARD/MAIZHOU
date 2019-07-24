package com.maizhou.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * ClassName:index
 * package:com.maizhou.controller
 * Description:
 *
 * @date:2019/7/22 23:54
 * @author: NIK
 */


@Controller
public class index {

    @RequestMapping(value="/maizhou/index")
    public String index() {

        return "index";

    }

    @RequestMapping(value="/maizhou/fromWhereICome")
    public String fromWhereICome() {

        return "fromWhereICome";

    }

    @RequestMapping(value="/maizhou/plasticContemporary")
    public String plasticContemporary() {

        return "plasticContemporary";

    }

    @RequestMapping(value="/maizhou/cvBio")
    public String cvBio() {

        return "cvBio";

    }

}

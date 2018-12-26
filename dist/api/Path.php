<?php

class Path {

    public static function root() {
        return dirname(__FILE__);
    }

    public static function infra() {
        return Path::root()."/infra";
    }

    public static function web() {
        return Path::root()."/web";
    }

    public static function db() {
        return Path::root()."/db";
    }

    public static function utils() {
        return Path::root()."/src/utils";
    }

}

?>
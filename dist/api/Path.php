<?php

class Path {

    private static function root() {
        return dirname(__FILE__)."/..";
    }

    public static function domain() {
        return Path::root()."/src/domain";
    }

    public static function infra() {
        return Path::root()."/src/infra";
    }

    public static function web() {
        return Path::root()."/src/web";
    }

    public static function db() {
        return Path::root()."/resources/db";
    }

    public static function utils() {
        return Path::root()."/src/utils";
    }

}

?>
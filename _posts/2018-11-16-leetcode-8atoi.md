---
layout:     post
title:      leetcode
subtitle:   8.atoi函数的实现
date:       2018-11-16
author:     istepping
header-img: img/home_bg1.jpg
catalog: true
tags:
---
# 8.atoi函数的实现
>要求:输入字符串，提取最前面的数字部分，并转换为int型

>示例:"  -42 world"  输出:-42

>代码思路: 先提取出-42,在转换-42为int,并判断范围

```
 public int myAtoi(String str){
        //提取的数字字符串
        StringBuilder output=new StringBuilder();
        //返回的结果
        int result=0;
        //遍历输入
        for(int i=0;i<str.length();i++){
            char c=str.charAt(i);
            //空格并且是一直是空格，跳过
            if(c==' ' && (i==0 || str.charAt(i-1)==' ')){
                continue;
            }
            //减号(并且是最左侧出现的"-",其他"-"作为字符处理)或数字
            else if ((c=='-' && (i==0 || str.charAt(i-1)==' ')) || (c>='0' && c <='9')){
                output.append(c);
            }
            //加号(并且是最左侧的加号)
            else if (c=='+' && (i==0 || str.charAt(i-1)==' ')){
                continue;
            }
            //其他符号，结束提取
            else{
                break;
            }
        }
        //转换int过程
        if(output.length()>0 ){
            if(output.charAt(0)=='-'){
                if(output.length()<=1){
                    //只有"-"
                    return 0;
                }
                //保留有效数字比如:-0000001转换-1
                while(output.length()>2 && output.charAt(1)=='0'){
                    output.deleteCharAt(1);
                }
            }else{
                //保留有效数字
                while(output.length()>1 && output.charAt(0)=='0'){
                    output.deleteCharAt(0);
                }
            }
            //比较范围,在int范围内
            if(output.length()<=9){
                return Integer.parseInt(output.toString());
            }
            //可能超过int,但是不会超过long，借助long判断
            else if(output.length()<=11){
                Long temp=Long.valueOf(output.toString());
                if(temp>Integer.MAX_VALUE){
                    result=Integer.MAX_VALUE;
                }
                else if(temp<Integer.MIN_VALUE){
                    result=Integer.MIN_VALUE;
                }else{
                    result=Integer.parseInt(output.toString());
                }
            }
            //直接超过范围
            else{
                if(output.charAt(0)=='-'){
                    result=Integer.MIN_VALUE;
                }else{
                    result=Integer.MAX_VALUE;
                }
            }
        }
        return result;
    }
```
create TABLE `user_score`
(
    `id`         bigint(20)    NOT NULL AUTO_INCREMENT comment 'id',
    `username`   varchar(256)           comment '用户名',
    `score`      int(11)       NOT NULL comment '得分',
    `costTime`   int(11)       NOT NULL comment '耗时（秒）',
    `questions`  varchar(1024) NOT NULL comment '题目 json',
    `answers`    varchar(1024) NOT NULL comment '答案 json',
    `createTime` datetime               DEFAULT CURRENT_TIMESTAMP comment '创建时间',
    `updateTime` datetime               DEFAULT CURRENT_TIMESTAMP ON update CURRENT_TIMESTAMP,
    `isDelete`   tinyint(4)    NOT NULL DEFAULT '0' comment '是否删除',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB comment ='用户得分'
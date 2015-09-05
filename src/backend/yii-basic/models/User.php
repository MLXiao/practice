<?php

namespace app\models;

use yii\mongodb\ActiveRecord;

class User extends ActiveRecord
{
    public static function collectionName()
    {
        return 'user';
    }

    public function attributes()
    {
        return ['_id', 'name', 'pwd'];
    }

    public function rules()
    {
        return [
            [['name', 'pwd'], 'required'],
        ];
    }
}
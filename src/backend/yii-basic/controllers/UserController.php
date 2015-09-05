<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\User;

class UserController extends Controller
{

    public function actionTest()
    {
        $request = Yii::$app->request;
        return 'OK';
    }

    public function actionGet()
    {
        $request = Yii::$app->request;
        return $request->get();
    }
}

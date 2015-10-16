<?php

namespace app\controllers\defaults;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\User;

class TestController extends Controller
{
    public function actionDir()
    {
        Yii::$app->response->format = Yii::$app->response->FORMAT_HTML;
        echo Yii::getAlias('@yii') . '<br>';
        echo Yii::getAlias('@app') . '<br>';
        echo __DIR__ . '<br>';
        echo __FILE__ . '<br>';
        echo Yii::$app->basePath;
    }

    public function actionMongo()
    {

    }

    public function actionGet()
    {
        Yii::getLogger()->log('abc', 2);
        return [
            'a' => 6,
            'b' => 7,
            'c' => 8,
        ];
    }

    public function actionPost()
    {
        return Yii::$app->request->post();
    }

    public function actionSSE()
    {
    }
}

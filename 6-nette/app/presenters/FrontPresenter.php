<?php declare(strict_types = 1);

namespace App\Presenters;

final class FrontPresenter extends BasePresenter
{

    public function actionDefault() {
        $this->template->SSR = [
            ['id' => 1, 'name' => 'Felix']
        ];
    }

}

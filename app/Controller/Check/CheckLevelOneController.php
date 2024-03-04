<?php

namespace Controller\Check;

use Studoo\EduFramework\Core\Controller\ControllerInterface;
use Studoo\EduFramework\Core\Controller\Request;

class CheckLevelOneController implements ControllerInterface
{

    public function execute(Request $request): string|null
    {
        return json_encode(['status' => 'OK',"username"=>$_POST['username']]);
    }
}
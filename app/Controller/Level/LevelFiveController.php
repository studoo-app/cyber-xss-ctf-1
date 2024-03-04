<?php

namespace Controller\Level;

use Studoo\EduFramework\Core\Controller\ControllerInterface;
use Studoo\EduFramework\Core\Controller\Request;
use Studoo\EduFramework\Core\View\TwigCore;

class LevelFiveController implements ControllerInterface
{

    public function execute(Request $request): string|null
    {
        $username = null;
        if(isset($_POST['submit']) && isset($_POST['username'])){
            $username = $_POST['username'];
        }
        return TwigCore::getEnvironment()->render(
            'level/five.html.twig',
            [
                'titre'   => 'Level Five',
                'requete' => $request,
                'username' => $username
            ]
        );

    }
}
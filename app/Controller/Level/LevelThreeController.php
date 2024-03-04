<?php

namespace Controller\Level;

use Studoo\EduFramework\Core\Controller\ControllerInterface;
use Studoo\EduFramework\Core\Controller\Request;
use Studoo\EduFramework\Core\View\TwigCore;

class LevelThreeController implements ControllerInterface
{

    public function execute(Request $request): string|null
    {
        $username = null;
        if(isset($_POST['submit']) && isset($_POST['username'])){
            $username = str_replace(["<script>","</script>"], "", $_POST['username']);
        }
        return TwigCore::getEnvironment()->render(
            'level/three.html.twig',
            [
                'titre'   => 'Level 3',
                'requete' => $request,
                'username' => $username
            ]
        );




    }
}
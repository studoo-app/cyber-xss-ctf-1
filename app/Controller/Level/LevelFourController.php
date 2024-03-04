<?php

namespace Controller\Level;

use Studoo\EduFramework\Core\Controller\ControllerInterface;
use Studoo\EduFramework\Core\Controller\Request;
use Studoo\EduFramework\Core\View\TwigCore;

class LevelFourController implements ControllerInterface
{

    public function execute(Request $request): string|null
    {
        $imgFileName = null;
        if(isset($_POST['submit']) && isset($_POST['imgFileName'])){
            $imgFileName = '/images/'.$_POST['imgFileName'];
        }
        return TwigCore::getEnvironment()->render(
            'level/four.html.twig',
            [
                'titre'   => 'Level 4',
                'requete' => $request,
                'imgFileName' => $imgFileName
            ]
        );




    }
}
<?php

namespace App\Controller;

use App\Entity\Evenement;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;

class EvenementController extends AbstractController
{
    /**
     * @Route("/evenement/list", name="app_evenement_list", methods={"GET"})
     */
    public function listActio(EntityManagerInterface $em): Response
    {
        $evenements = $em->getRepository(Evenement::class)
                        ->findAll();
                        
        $response = $this->json($evenements, 200, ['groups' => 'post_event:read']);
        return $response;
    }

    /**
     * @Route("/evenement/create", name="app_evenement_create", methods={"POST"})
     */
    public function createAction(Request $request, SerializerInterface $serializer, EntityManagerInterface $em)
    {
        $jsonRecu = $request->getContent();
        try{
            $post = $serializer->deserialize($jsonRecu, Evenement::class, 'json');

            $post->setDateCreation(new \DateTime());
            $post->setHeureCreation(new \DateTime());
            
            $em->persist($post);
            $em->flush();

            return $this->json($post);
        }catch(NotEncodableValueException $e){
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }
    }
}

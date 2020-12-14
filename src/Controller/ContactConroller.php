<?php

namespace App\Controller;

use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ContactConroller extends AbstractController
{
    public function listAction(EntityManagerInterface $em): Response
    {
        $contacts = $em->getRepository(Contact::class)
                    ->findAll();
                    
        $response = $this->json($contacts, 200, ['groups' => 'post_cont:read']);
        return $response;
    }

    public static function random_3($nbr) {
        $chn = '';
        for ($i=1;$i<=$nbr;$i++)
            $chn .= chr(floor(rand(0, 25)+97));
            return $chn;
    }

    /**
     * @Route("/contact/create", name="app_contact_create", methods={"POST"})
     */
    public function createAction(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $vi)
    {
        // $event_post = json_decode($request->getContent(), true)['evenements'];
        // dd($event_post);
        $jsonRecu = $request->getContent();
        try{
            $post = $serializer->deserialize($jsonRecu, Contact::class, 'json');
            $post->setPublicId(ContactConroller::random_3(20));
            $post->setDateCreation(new \DateTime());
            $post->setHeureCreation(new \DateTime());

            $errors = $vi->validate($post);

            if(count($errors) > 0){
                return $this->json($errors, 400);
            }

            // if(count($event_post)>0){
            //     for($i=0; $i<count($event_post); $i++){

            //     }
            // }

            $em->persist($post);
            $em->flush();

            return $this->json($post);
        }
        catch(NotEncodableValueException $e){
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }
    }

     /**
     * @Route("contact/get/{public_id}", name="app_contact_get", methods={"GET"})
     */
    public function getAction(string $public_id, EntityManagerInterface $em)
    {
        $contactToGet = $em->getRepository(Contact::class)
                    ->findOneBy(['public_id' => $public_id]);

        if($contactToGet){
            $response = $this->json($contactToGet, 200, [], ['groups' => 'post:read']);
            return $response;
        }
        throw $this->createNotFoundException(
            'No contact found for public_id '.$public_id
        );
        // catch(NotFoundHttpException $e){
        //     return $this->json([
        //         'status' => 404,
        //         'message' => $e->getMessage()
        //     ], 404);
        // }
    }

    /**
     * @Route("contact/update/{public_id}", name="app_contact_update", methods={"UPDATE"})
     */
    // public function updateAction(Request $request, EntityManagerInterface $em):Response
    // {
    //     $contactToUpdate = $em->getRepository(Contact::class)
    //                 ->find($request->get('public_id'));

    //     try{
    //         $em->remove($contactToDelete);
    //         $em->flush();

    //         return $this->json([
    //             'status' => 200,
    //             'message' => 'Contact deleted successfully'
    //         ], 200);
    //     }
    //     catch(NotFoundHttpException $e){
    //         return $this->json([
    //             'status' => 404,
    //             'message' => $e->getMessage()
    //         ], 404);
    //     }
    // }

    /**
     * @Route("contact/delete/{public_id}", name="app_contact_delete", methods={"DELETE"})
     */
    // public function deleteAction(Request $request, EntityManagerInterface $em)
    // {
    //     $contactToDelete = $em->getRepository(Contact::class)
    //                 ->find($request->get('public_id'));

    //     try{
    //         $em->remove($contactToDelete);
    //         $em->flush();

    //         return $this->json([
    //             'status' => 200,
    //             'message' => 'Contact deleted successfully'
    //         ], 200);
    //     }
    //     catch(NotFoundHttpException $e){
    //         return $this->json([
    //             'status' => 404,
    //             'message' => $e->getMessage()
    //         ], 404);
    //     }
    // }

}

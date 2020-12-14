<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Contact;
use App\Entity\Evenement;
use Faker\Factory;
use App\Controller\ContactConroller;

class AppFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');
        for($e=0; $e<5; $e++){
            $evenement = new Evenement();
            $evenement->setTitre($faker->title)
                        ->setDate($faker->dateTimeBetween('-5 days','now +1 month'))
                        ->setLieu($faker->city())
                        ->setDescription($faker->realText(100))
                        ->setDateCreation($faker->dateTimeBetween('-5 days','now +1 month'))
                        ->setHeureCreation(new \DateTime())
                        ->setIsDeleted(false);
            $manager->persist($evenement);  

            for($c=0; $c<10; $c++){
                $contact = new Contact();
                $contact->setPublicId(ContactConroller::random_3(20))
                        ->setNom($faker->lastname)
                        ->setPrenom($faker->firstname())
                        ->setEmail($faker->email)
                        ->setTelephone($faker->unique()->numberBetween(600000000,699999999))
                        ->setDateCreation($faker->dateTimeBetween('-5 days','now +1 month'))
                        ->setHeureCreation(new \DateTime())
                        ->setIsDeleted(false)
                        ->addEvenement($evenement);
                $manager->persist($contact);
            }
        }

        $manager->flush();
    }
}

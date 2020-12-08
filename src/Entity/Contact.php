<?php

namespace App\Entity;

use App\Repository\ContactRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ContactRepository::class)
 */
class Contact
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("post:read")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Groups("post:read")
     */
    private $public_id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("post:read")
     * @Assert\NotBlank
     * @Assert\Length(min=5)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("post:read")
     * @Assert\NotBlank
     * @Assert\Length(min=5)
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Groups("post:read")
     * @Assert\NotBlank
     * @Assert\Length(min=5)
     */
    private $email;

    /**
     * @ORM\Column(type="integer")
     * @Groups("post:read")
     * @Assert\NotBlank
     * @Assert\Length(min=9,max=9)
     */
    private $telephone;

    /**
     * @ORM\Column(type="date")
     * @Groups("post:read")
     */
    private $date_creation;

    /**
     * @ORM\Column(type="time")
     * @Groups("post:read")
     */
    private $heure_creation;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_deleted;

    /**
     * @ORM\ManyToMany(targetEntity=Evenement::class)
     */
    private $evenements;

    public function __construct()
    {
        $this->evenements = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPublicId(): ?string
    {
        return $this->public_id;
    }

    public function setPublicId(string $public_id): self
    {
        $this->public_id = $public_id;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getTelephone(): ?int
    {
        return $this->telephone;
    }

    public function setTelephone(int $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getDateCreation(): ?\DateTimeInterface
    {
        return $this->date_creation;
    }

    public function setDateCreation(\DateTimeInterface $date_creation): self
    {
        $this->date_creation = $date_creation;

        return $this;
    }

    public function getHeureCreation(): ?\DateTimeInterface
    {
        return $this->heure_creation;
    }

    public function setHeureCreation(\DateTimeInterface $heure_creation): self
    {
        $this->heure_creation = $heure_creation;

        return $this;
    }

    public function getIsDeleted(): ?bool
    {
        return $this->is_deleted;
    }

    public function setIsDeleted(bool $is_deleted): self
    {
        $this->is_deleted = $is_deleted;

        return $this;
    }

    /**
     * @return Collection|evenement[]
     */
    public function getEvenements(): Collection
    {
        return $this->evenements;
    }


    public function addEvenement(evenement $evenement): self
    {
        if (!$this->evenements->contains($evenement)) {
            $this->evenements[] = $evenement;
        }

        return $this;
    }

    public function removeEvenement(evenement $evenement): self
    {
        $this->evenements->removeElement($evenement);

        return $this;
    }
}

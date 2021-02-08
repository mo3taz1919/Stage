package com.example.entites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	private String nom;
	private String prenom;
	private String sexe;
	private int cin ;
	private int tel ;
	private String mail;
	
	private String adresse;

	public User() {
		super();
	}

	public User(Long id, String nom, String prenom, String sexe, int cin, int tel, String mail, String adresse) {
		super();
		Id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.sexe = sexe;
		this.cin = cin;
		this.tel = tel;
		this.mail = mail;
		this.adresse = adresse;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public int getCin() {
		return cin;
	}

	public void setCin(int cin) {
		this.cin = cin;
	}

	public int getTel() {
		return tel;
	}

	public void setTel(int tel) {
		this.tel = tel;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	

}

package com.example.Rest;

import java.util.Collection;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.InterfaceMetier.UserInterface;
import com.example.entites.User;
@RestController
@RequestMapping("/User")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserRest {
	@Autowired
	private UserInterface vf;
	@PostMapping("/add") 
	public void save(@RequestBody User v)
	
	{	vf.add(v);
	}
	@GetMapping("/get")
	public Collection<User> findALL()
	{
		return vf.getAll();
	}
	@GetMapping("/getNom/{idUser}")
	public User getNom(@PathVariable(value = "idUser") Long idUser)
	{
		return vf.getId(idUser);
	}
	
	@DeleteMapping("/delete/{id}")
	public void supprimer(@PathVariable(value = "id") Long id) {
		vf.delete(id);
	}
	@PutMapping("edit")  // modification
	public void update (@RequestBody User v)
	
	{
	vf.update(v);
	}
	@GetMapping("/getone/{id}")
	public User findOne(@PathVariable(value = "id")Long id)
	{
		return vf.getId(id);
	}
}

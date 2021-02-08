package com.example.InterfaceMetier;

import java.util.Collection;

import com.example.entites.User;



public interface UserInterface {
	public Collection<User> getAll();
	public User getId(Long id);
	public void delete(long id);
	public User add (User c );
	public User update (User c);
}

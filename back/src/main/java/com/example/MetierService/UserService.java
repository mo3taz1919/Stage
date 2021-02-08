package com.example.MetierService;

import java.util.Collection;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.InterfaceMetier.UserInterface;
import com.example.Repository.UserRepository;
import com.example.entites.User;
@Service
public class UserService implements UserInterface {
	
	
	@Autowired
	private UserRepository vr;
	@Transactional

	@Override
	public Collection<User> getAll() {
		return vr.findAll();
	}

	@Override
	public User getId(Long id) {
		return vr.findById(id).get();
	}

	@Override
	public void delete(long id) {
		vr.deleteById(id);
	}

	@Override
	public User add(User c) {
		return vr.save(c);
	}

	@Override
	public User update(User c) {
		return vr.saveAndFlush(c);
	}

}

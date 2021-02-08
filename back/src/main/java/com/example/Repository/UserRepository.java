package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.entites.User;

public interface UserRepository extends JpaRepository<User,Long>{

}

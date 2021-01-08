package com.coforge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.coforge.model.User;

@Repository
public interface UserRepo extends JpaRepository<User,Long>{
	 @Query("select E from User E WHERE E.email=:email")
	 public  User find(@Param("email") String email);
}

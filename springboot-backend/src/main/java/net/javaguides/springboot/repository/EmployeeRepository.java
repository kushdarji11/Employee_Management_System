package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import net.javaguides.springboot.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}

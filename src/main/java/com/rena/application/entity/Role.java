package com.rena.application.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Getter
@Setter
@Entity
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false, unique = true, length = 50)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String name;

    @Version
    @Column(name = "version")
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Integer version;

}
package com.rena.application.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Getter
@Setter
@Entity
@Table(name = "user_", indexes = {
        @Index(name = "idx_user__role_id", columnList = "role_id")
}, uniqueConstraints = {
        @UniqueConstraint(name = "uc_user__username", columnNames = {"username"})
})
public class User {
    @Id
    @NotNull
    @Column(name = "code", nullable = false, unique = true)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private Integer code;

    @Size(max = 50)
    @NotNull
    @Column(name = "username", length = 50)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String username;

    @Size(max = 255)
    @NotNull
    @Column(name = "password", nullable = false, length = 30)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String password;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @Version
    @Column(name = "version", nullable = false)
    private Integer version;

    @Column(name = "is_deleted", nullable = false)
    @JdbcTypeCode(SqlTypes.BIT)
    private Boolean is_deleted = false;
}
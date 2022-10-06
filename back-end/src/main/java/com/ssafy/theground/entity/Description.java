package com.ssafy.theground.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Builder
@Getter
@Setter
@DynamicUpdate
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "descriptions")
public class Description {

    @Id
    @OneToOne
    @MapsId
    @JoinColumn(name="match_seq")
    private Match match;

    @ColumnDefault("")
    @Column(name="description_1st_top")
    private String description1stTop;

    @ColumnDefault("")
    @Column(name="description_1st_bottom")
    private String description1stBottom;

    @ColumnDefault("")
    @Column(name="description_2nd_top")
    private String description2ndTop;

    @ColumnDefault("")
    @Column(name="description_2nd_bottom")
    private String description2ndBottom;

    @ColumnDefault("")
    @Column(name="description_3rd_top")
    private String description3rdTop;

    @ColumnDefault("")
    @Column(name="description_3rd_bottom")
    private String description3rdBottom;

    @ColumnDefault("")
    @Column(name="description_4th_top")
    private String description4thTop;

    @ColumnDefault("")
    @Column(name="description_4th_bottom")
    private String description4thBottom;

    @ColumnDefault("")
    @Column(name="description_5th_top")
    private String description5thTop;

    @ColumnDefault("")
    @Column(name="description_5th_bottom")
    private String description5thBottom;

    @ColumnDefault("")
    @Column(name="description_6th_top")
    private String description6thTop;

    @ColumnDefault("")
    @Column(name="description_6th_bottom")
    private String description6thBottom;

    @ColumnDefault("")
    @Column(name="description_7th_top")
    private String description7thTop;

    @ColumnDefault("")
    @Column(name="description_7th_bottom")
    private String description7thBottom;

    @ColumnDefault("")
    @Column(name="description_8th_top")
    private String description8thTop;

    @ColumnDefault("")
    @Column(name="description_8th_bottom")
    private String description8thBottom;

    @ColumnDefault("")
    @Column(name="description_9th_top")
    private String description9thTop;

    @ColumnDefault("")
    @Column(name="description_9th_bottom")
    private String description9thBottom;
}

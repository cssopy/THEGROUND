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
    @Column(name = "match_seq")
    private Long matchSeq;

    @OneToOne
    @MapsId
    @JoinColumn(name="match_seq")
    private Match match;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_1st_top")
    private String description1stTop;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_1st_bottom")
    private String description1stBottom;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_2nd_top")
    private String description2ndTop;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_2nd_bottom")
    private String description2ndBottom;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_3rd_top")
    private String description3rdTop;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_3rd_bottom")
    private String description3rdBottom;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_4th_top")
    private String description4thTop;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_4th_bottom")
    private String description4thBottom;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_5th_top")
    private String description5thTop;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_5th_bottom")
    private String description5thBottom;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_6th_top")
    private String description6thTop;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_6th_bottom")
    private String description6thBottom;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_7th_top")
    private String description7thTop;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_7th_bottom")
    private String description7thBottom;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_8th_top")
    private String description8thTop;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_8th_bottom")
    private String description8thBottom;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_9th_top")
    private String description9thTop;

    @NotNull
    @ColumnDefault("")
    @Column(name="description_9th_bottom")
    private String description9thBottom;
}

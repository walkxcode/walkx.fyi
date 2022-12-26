---
layout: page
title: All Thoughts
permalink: /all-thoughts/
emoji: 📄
menu: thoughts
---

<ul markdown="0">
    {% for post in site.posts %}
        <li>
            <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%Y-%m-%d" }}</time>
            <a href="{{ post.url }}">{% if post.emoji %} {{ post.emoji }}{% endif %} {{ post.title }}</a></li>
    {% endfor %}
</ul>

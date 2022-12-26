---
layout: page
title: Projects
permalink: /projects/
emoji: 📚
menu: pages
---

As a passionate creator and developer, I am constantly seeking new and exciting projects to work on. Over the years, I have had the opportunity to work on a wide variety of projects, ranging from simple command line tools to complex web applications.

One thing that I am particularly proud of is the fact that all of my projects are open-source, which means that anyone can access, use, and contribute to them.

---

<ul markdown="0">
    {% for project in site.projects %}
        <li>
            <a href="{{ project.url }}">{% if project.emoji %} {{ project.emoji }}{% endif %} {{ project.title }}</a></li>
    {% endfor %}
</ul>

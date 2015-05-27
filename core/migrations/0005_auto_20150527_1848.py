# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_mappage'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='mappage',
            options={'verbose_name': 'Map page'},
        ),
        migrations.AddField(
            model_name='wagtailpage',
            name='latitude',
            field=models.CharField(max_length=255, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='wagtailpage',
            name='longitude',
            field=models.CharField(max_length=255, blank=True),
            preserve_default=True,
        ),
    ]

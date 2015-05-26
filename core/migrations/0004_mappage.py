# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_wagtailsitepage_is_featured'),
    ]

    operations = [
        migrations.CreateModel(
            name='MapPage',
            fields=[
                ('wagtailpage_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='core.WagtailPage')),
            ],
            options={
                'verbose_name': 'Campaign',
                'description': 'A map view of all the companies and sites currently using Wagtail',
            },
            bases=('core.wagtailpage',),
        ),
    ]

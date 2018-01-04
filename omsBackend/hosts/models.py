# -*- coding: utf-8 -*-
# author: itimor

from django.db import models

ASSET_STATUS = {
    'used': u'使用中',
    'noused': u'未使用',
    'broken': u'故障'
}

ASSET_TYPE = {
    'physical': u"物理机",
    'virtual': u"虚拟机",
    'container': u"容器",
    'network': u"网络设备",
    'other': u"其他设备"
}


class Host(models.Model):
    hostname = models.CharField(unique=True, max_length=50, verbose_name=u"主机名")
    ip = models.GenericIPAddressField(unique=True, max_length=15, verbose_name=u"主IP")
    other_ip = models.CharField(max_length=100, null=True, blank=True, verbose_name=u"备用IP")
    idc = models.ForeignKey('Idc', null=True, blank=True, verbose_name=u"机房")
    asset_type = models.CharField(choices=ASSET_TYPE.items(), default='virtual', max_length=30, verbose_name=u"设备类型")
    status = models.CharField(choices=ASSET_STATUS.items(), default='used', max_length=30, verbose_name=u"设备状态")
    os = models.CharField(max_length=30, null=True, blank=True, verbose_name=u"操作系统")
    cpu = models.CharField(max_length=30, null=True, blank=True, verbose_name=u"CPU信息")
    memory = models.CharField(max_length=30, null=True, blank=True, verbose_name=u"内存信息")
    disk = models.CharField(max_length=30, null=True, blank=True, verbose_name=u"硬盘信息")
    desc = models.TextField(max_length=200, null=True, blank=True, verbose_name=u"备注")

    def __str__(self):
        return self.hostname

    class Meta:
        verbose_name = u'服务器'
        verbose_name_plural = u'服务器'


class Idc(models.Model):
    name = models.CharField(max_length=30, unique=True, verbose_name=u"名称")
    user = models.CharField(max_length=30, null=True, blank=True, verbose_name=u"联系人")
    tel = models.CharField(max_length=30, null=True, blank=True, verbose_name=u"联系人电话")
    desc = models.CharField(max_length=100, null=True, blank=True, verbose_name=u"备注")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = u'idc'
        verbose_name_plural = u'idc'
